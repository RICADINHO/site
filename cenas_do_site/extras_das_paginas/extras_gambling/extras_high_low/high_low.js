var numero = document.getElementById("numero")
    var botao = document.getElementById("botao")
    let num_high = 0
    let num_low = 999999999

    async function num(){
        var num_random = Math.floor(Math.random() * 1000000001)
        if(tem_user){

            numero.textContent = num_random

            //console.log(recordes_a_ser_atualizados[0].recordes_gambling[1][1][0])

            if(num_random > num_high){
                botao.disabled = true;

                popup.textContent = "NOVO RECORDE (PB) NO HIGH!"
                popup.classList.remove("hide");
                popup.classList.add("show");

                const {
                data: { user },
                    error1
                } = await client.auth.getUser();

                const { data: recordes_a_ser_atualizados } = await client
                .from('users')
                .select('recordes_gambling')
                .eq('email', user.email)

                var antigo = recordes_a_ser_atualizados[0].recordes_gambling[1][1][0].split("_")
                antigo[0] = num_random
                antigo = antigo.join("_")
                recordes_a_ser_atualizados[0].recordes_gambling[1][1][0] = antigo
                novo = recordes_a_ser_atualizados[0].recordes_gambling
                console.log(recordes_a_ser_atualizados[0].recordes_gambling[1][1][0])

                const { error: updateError } = await client
                    .from('users')
                    .update({ recordes_gambling: novo })
                    .eq('email', user.email);

                    if (updateError) {
                        console.error(updateError);
                    } else {
                        console.log('Update ao HIGH feito');
                    }
                
                setTimeout(() => {
                    popup.classList.remove("show");
                    popup.classList.add("hide");
                    botao.disabled = false;
                    num_high = num_random 
                }, 4000);

            }
            if(num_random < num_low){
                botao.disabled = true;


                popup.textContent = "NOVO RECORDE (PB) NO LOW!"
                popup.classList.remove("hide");
                popup.classList.add("show");


                const {
                data: { user },
                    error1
                } = await client.auth.getUser();

                const { data: recordes_a_ser_atualizados } = await client
                .from('users')
                .select('recordes_gambling')
                .eq('email', user.email)

                var antigo = recordes_a_ser_atualizados[0].recordes_gambling[1][1][0].split("_")
                antigo[1] = num_random
                antigo = antigo.join("_")
                recordes_a_ser_atualizados[0].recordes_gambling[1][1][0] = antigo
                novo = recordes_a_ser_atualizados[0].recordes_gambling
                console.log(recordes_a_ser_atualizados[0].recordes_gambling[1][1][0])

                const { error: updateError } = await client
                    .from('users')
                    .update({ recordes_gambling: novo })
                    .eq('email', user.email);

                    if (updateError) {
                        console.error(updateError);
                    } else {
                        console.log('Update ao LOW feito');
                    }
                setTimeout(() => {
                    popup.classList.remove("show");
                    popup.classList.add("hide");
                    botao.disabled = false;
                    num_low = num_random
                }, 4000);

            }

        }else{
            numero.textContent = num_random
        } 
    }


    var tem_user = false

    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZodnduenV5c2JsdGJiaGN1Ymp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2NDc0NTcsImV4cCI6MjA4MTIyMzQ1N30.4zsRoSm524_F1XQTx54ZN99q-hEXU9sBh8kT1fYd1so'
    const SUPABASE_URL = 'https://vhvwnzuysbltbbhcubjw.supabase.co';
    const { createClient } = supabase;
    const client = createClient(SUPABASE_URL, SUPABASE_KEY);

    async function checkUser() {
        const {
        data: { user },
        error
        } = await client.auth.getUser();

        if (user) {
            tem_user = true

            const { data: nome_user } = await client
            .from('users')
            .select('nome')
            .eq('email', user.email)
            .single();
            console.log("user: "+user.email+" __ "+nome_user )

            login.textContent = user.email


            /*const {
                data: { user },
                    error1
            } = await client.auth.getUser();*/

            const { data: recordes_a_ser_atualizados } = await client
                .from('users')
                .select('recordes_gambling')
                .eq('email', user.email)

            num_high = parseInt(recordes_a_ser_atualizados[0].recordes_gambling[1][1][0].split("_")[0])
            num_low = parseInt(recordes_a_ser_atualizados[0].recordes_gambling[1][1][0].split("_")[1])
        }
    }

    async function recordes() {

        const { data: data_recordes } = await client
            .from('users')
            .select('*')

        recordes_high = []
        recordes_low = []

        for (let i = 0; i < data_recordes.length; i++) {
            recordes_high.push([data_recordes[i].nome,parseInt(data_recordes[i].recordes_gambling[1][1][0].split("_")[0])])
            recordes_low.push([data_recordes[i].nome,parseInt(data_recordes[i].recordes_gambling[1][1][0].split("_")[1])])
        }

        recordes_high.sort(compareSecondColumn)
        recordes_low.sort(compareSecondColumn)

        top1high.textContent = recordes_high[recordes_high.length - 1][0]+" - "+recordes_high[recordes_high.length - 1][1]
        top2high.textContent = recordes_high[recordes_high.length - 2][0]+" - "+recordes_high[recordes_high.length - 2][1]
        top3high.textContent = recordes_high[recordes_high.length - 3][0]+" - "+recordes_high[recordes_high.length - 3][1]

        top1low.textContent = recordes_low[0][0]+" - "+recordes_low[0][1]
        top2low.textContent = recordes_low[1][0]+" - "+recordes_low[1][1]
        top3low.textContent = recordes_low[2][0]+" - "+recordes_low[2][1]

    }


    function compareSecondColumn(a, b) {
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] < b[1]) ? -1 : 1;
        }
    }



    checkUser()
    recordes()