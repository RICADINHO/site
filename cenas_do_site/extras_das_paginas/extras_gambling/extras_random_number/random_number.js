let lock_geral = [true,true,true,true]
    let lock_musica = 0
    
    let speed = 500
    let modo = 0
    var botao_fast_mode = document.getElementById("botao_fast_mode")

    var num_a_adivinhar100 = document.getElementById("num_a_adivinhar100")
    var num_random100 = document.getElementById("num_random100")
    var popup100 = document.getElementById("popup100");
    var botao100 = document.getElementById("botao_gerar100");
    num_a_adivinhar100.textContent = Math.floor(Math.random() * 101)


    var num_a_adivinhar1000 = document.getElementById("num_a_adivinhar1000")
    var num_random1000 = document.getElementById("num_random1000")
    var popup1000 = document.getElementById("popup1000");
    var botao1000 = document.getElementById("botao_gerar1000");
    num_a_adivinhar1000.textContent = Math.floor(Math.random() * 1001)


    var num_a_adivinhar10000 = document.getElementById("num_a_adivinhar10000")
    var num_random10000 = document.getElementById("num_random10000")
    var popup10000 = document.getElementById("popup10000");
    var botao10000 = document.getElementById("botao_gerar10000");
    num_a_adivinhar10000.textContent = Math.floor(Math.random() * 10001)


    var num_a_adivinharM = document.getElementById("num_a_adivinharM")
    var num_randomM = document.getElementById("num_randomM")
    var popupM = document.getElementById("popupM");
    var botaoM = document.getElementById("botao_gerarM");
    num_a_adivinharM.textContent = Math.floor(Math.random() * 1000000001)


    // -------------------------------------- 100 ---------------------------------------
    function numero100(){
        if (lock_musica==0 & modo==0){ // tocar musica de fundo se clicar no botao e fast mode nao estiver ativado
            musica_normal.play()
            lock_musica=1
        }
    
        lock_geral[0] = false
        botao100.disabled = true;
        num_random100.textContent = Math.floor(Math.random() * 101);

        if(num_random100.textContent == num_a_adivinhar100.textContent){ // ACERTOU
            console.log("acertou numero a adivinhar: "+num_a_adivinhar100.textContent+"__ numero gerado: "+num_random100.textContent)
            console.log(num_random100.textContent == num_a_adivinhar100.textContent)
            popup100.textContent = "ACERTASTE"

            popup100.classList.remove("hide");
            popup100.classList.add("show");

            update_user("t100");

            setTimeout(() => this.reset_num(0), 2000);
        }else if(Math.abs(num_random100.textContent - num_a_adivinhar100.textContent) == 1){ // POR 1
            popup100.textContent = "POR 1"

            popup100.classList.remove("hide");
            popup100.classList.add("show");

            setTimeout(() => this.reset_num(0), 2000);
        }else if(flipInt(num_random100.textContent) == num_a_adivinhar100.textContent){ // NUMERO INVERTIDO
            popup100.textContent = "NUMERO INVERTIDO"

            popup100.classList.remove("hide");
            popup100.classList.add("show");

            setTimeout(() => this.reset_num(0), 2000);
        }else if(Math.abs(num_random100.textContent - num_a_adivinhar100.textContent) < 5){ // QUASE
            popup100.textContent = "QUASE"

            popup100.classList.remove("hide");
            popup100.classList.add("show");

            setTimeout(() => this.reset_num(0), 500);
        }else{ // ERROU
            setTimeout(() => this.reset_num(0), speed);
        }
    }


    // -------------------------------------- 1000 ---------------------------------------
    function numero1000(){
        if (lock_musica==0 & modo==0){ // tocar musica de fundo se clicar no botao e fast mode nao estiver ativado
            musica_normal.play()
            lock_musica=1
        }

        lock_geral[1] = false
        botao1000.disabled = true;
        num_random1000.textContent = Math.floor(Math.random() * 1001);

        if(num_random1000.textContent == num_a_adivinhar1000.textContent){ // ACERTOU
            console.log("acertou numero a adivinhar: "+num_a_adivinhar1000.textContent+"__ numero gerado: "+num_random1000.textContent)
            console.log(num_random1000.textContent == num_a_adivinhar1000.textContent)
            popup1000.textContent = "ACERTASTE"

            popup1000.classList.remove("hide");
            popup1000.classList.add("show");

            update_user("t1000");

            setTimeout(() => this.reset_num(1), 3500);
        }else if(Math.abs(num_random1000.textContent - num_a_adivinhar1000.textContent) == 1){ // POR 1
            popup1000.textContent = "POR 1"

            popup1000.classList.remove("hide");
            popup1000.classList.add("show");

            setTimeout(() => this.reset_num(1), 3500);
        }else if(flipInt(num_random1000.textContent) == num_a_adivinhar1000.textContent){ // NUMERO INVERTIDO
            popup1000.textContent = "NUMERO INVERTIDO"

            popup1000.classList.remove("hide");
            popup1000.classList.add("show");

            setTimeout(() => this.reset_num(1), 3500);
        }else if(Math.abs(num_random1000.textContent - num_a_adivinhar1000.textContent) < 10){ // BEM QUASE
            popup1000.textContent = "BEM QUASE"

            popup1000.classList.remove("hide");
            popup1000.classList.add("show");

            setTimeout(() => this.reset_num(1), 3000);
        }else if(Math.abs(num_random1000.textContent - num_a_adivinhar1000.textContent) < 50){ // QUASE
            popup1000.textContent = "QUASE"

            popup1000.classList.remove("hide");
            popup1000.classList.add("show");

            setTimeout(() => this.reset_num(1), 2500);
        }else if(num_random1000.textContent === "777"){ // 777 METER UM AUIDO DE SLOT MACHINE
            popup1000.textContent = "GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE"

            popup1000.classList.remove("hide");
            popup1000.classList.add("show");

            setTimeout(() => this.reset_num(1), 3000);
        }else{ // ERROU
            setTimeout(() => this.reset_num(1), speed);
        }
    }



    // -------------------------------------- 10000 ---------------------------------------
    function numero10000(){
        if (lock_musica==0 & modo==0){ // tocar musica de fundo se clicar no botao e fast mode nao estiver ativado
            musica_normal.play()
            lock_musica=1
        }

        lock_geral[2] = false // lock do botao geral
        botao10000.disabled = true; // desativa o botao enquanto faz os calculos da comparacao com o numero gerado e o numero random
        num_random10000.textContent = Math.floor(Math.random() * 10001); // primeiro numero random para acertar

        if(num_random10000.textContent == num_a_adivinhar10000.textContent){ // ACERTOU
            console.log("acertou numero a adivinhar: "+num_a_adivinhar10000.textContent+"__ numero gerado: "+num_random10000.textContent)
            console.log(num_random10000.textContent == num_a_adivinhar10000.textContent)
            popup10000.textContent = "ACERTASTEEEEEEEEEEEEEEEEEEEEEEEE EEEEEEEEEEEE 0.0001 CHANCE"

            popup10000.classList.remove("hide");
            popup10000.classList.add("show");

            update_user("t10000");

            setTimeout(() => this.reset_num(2), 8000);
        }else if(Math.abs(num_random10000.textContent - num_a_adivinhar10000.textContent) == 1){ // POR 1
            popup10000.textContent = "POR 1"

            popup10000.classList.remove("hide");
            popup10000.classList.add("show");

            setTimeout(() => this.reset_num(2), 8000);
        }else if(flipInt(num_random10000.textContent) == num_a_adivinhar10000.textContent){ // NUMERO INVERTIDO
            popup10000.textContent = "NUMERO INVERTIDO"

            popup10000.classList.remove("hide");
            popup10000.classList.add("show");

            setTimeout(() => this.reset_num(2), 6000);
        }else if(Math.abs(num_random10000.textContent - num_a_adivinhar10000.textContent) < 10){ // MESMO QUASE
            popup10000.textContent = "MESMO QUASE"

            popup10000.classList.remove("hide");
            popup10000.classList.add("show");

            setTimeout(() => this.reset_num(2), 3000);
        }else if(Math.abs(num_random10000.textContent - num_a_adivinhar10000.textContent) < 50){ // BEM QUASE
            popup10000.textContent = "BEM QUASE"

            popup10000.classList.remove("hide");
            popup10000.classList.add("show");

            setTimeout(() => this.reset_num(2), 2500);
        }else if(Math.abs(num_random10000.textContent - num_a_adivinhar10000.textContent) < 80){ // QUASE
            popup10000.textContent = "QUASE"

            popup10000.classList.remove("hide");
            popup10000.classList.add("show");

            setTimeout(() => this.reset_num(2), 2000);
        }else if(num_random10000.textContent == "1987"){ // 1987
            popup10000.textContent = "THE BITE OF 87'?"

            popup10000.classList.remove("hide");
            popup10000.classList.add("show");

            setTimeout(() => this.reset_num(2), 6000);
        }else if(num_random10000.textContent == "1983"){ // 1983
            popup10000.textContent = "THE BITE OF 83'?"

            popup10000.classList.remove("hide");
            popup10000.classList.add("show");

            setTimeout(() => this.reset_num(2), 6000);
        }else if(num_random10000.textContent === "777"){ // 777 METER UM AUIDO DE SLOT MACHINE
            popup10000.textContent = "GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE GAMBLE"

            popup10000.classList.remove("hide");
            popup10000.classList.add("show");

            setTimeout(() => this.reset_num(2), 3000);
        }else{ // ERROU
            setTimeout(() => this.reset_num(2), speed);
        }
    }


        // -------------------------------------- 1000000000 ---------------------------------------
    function numeroM(){
        if (lock_musica==0 & modo==0){ // tocar musica de fundo se clicar no botao e fast mode nao estiver ativado
            musica_normal.play()
            lock_musica=1
        }

        lock_geral[3] = false;
        botaoM.disabled = true;
        num_randomM.textContent = Math.floor(Math.random() * 1000000001);

        if(num_randomM.textContent == num_a_adivinharM.textContent){ // ACERTOU
            console.log("acertou numero a adivinhar: "+num_a_adivinharM.textContent+"__ numero gerado: "+num_randomM.textContent)
            console.log(num_randomM.textContent == num_a_adivinharM.textContent)
            popupM.textContent = "ACERTASTEEEEEEEEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEEEEEEEE EEEEEEEEEEEEEEEEEEEEEEEEEEEE 0.000000001 CHANCE"

            popupM.classList.remove("hide");
            popupM.classList.add("show");

            update_user(Math.abs(num_randomM.textContent-num_a_adivinharM.textContent))

            setTimeout(() => this.reset_num(3), 30000);
        }else if(Math.abs(num_randomM.textContent - num_a_adivinharM.textContent) == 1){ // POR 1
            popupM.textContent = "POOOOOOOOOOO OOOOOOOR 1 \n NO WAAAAAAAAAA AAAAAAAAAAY"

            popupM.classList.remove("hide");
            popupM.classList.add("show");

            setTimeout(() => this.reset_num(3), 30000);
        }else if(flipInt(num_randomM.textContent) == num_a_adivinharM.textContent){ // NUMERO INVERTIDO
            popupM.textContent = "NUMERO INVERTIDO"

            popupM.classList.remove("hide");
            popupM.classList.add("show");

            update_user(Math.abs(num_randomM.textContent-num_a_adivinharM.textContent))

            setTimeout(() => this.reset_num(3), 30000);
        }else if(Math.abs(num_randomM.textContent - num_a_adivinharM.textContent) < 10){ // QUASE (>10)
            popupM.textContent = "QUASE LAAAAAAAA AAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAA (>10)"

            popupM.classList.remove("hide");
            popupM.classList.add("show");

            update_user(Math.abs(num_randomM.textContent-num_a_adivinharM.textContent))

            setTimeout(() => this.reset_num(3), 25000);
        }else if(Math.abs(num_randomM.textContent - num_a_adivinharM.textContent) < 50){ // QUASE (>50)
            popupM.textContent = "AAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAAA (>50)"

            popupM.classList.remove("hide");
            popupM.classList.add("show");

            update_user(Math.abs(num_randomM.textContent-num_a_adivinharM.textContent))

            setTimeout(() => this.reset_num(3), 25000);
        }else if(Math.abs(num_randomM.textContent - num_a_adivinharM.textContent) < 100){ // QUASE (>100)
            popupM.textContent = "OMGGGGGGGGGGGGG (>100)"

            popupM.classList.remove("hide");
            popupM.classList.add("show");

            update_user(Math.abs(num_randomM.textContent-num_a_adivinharM.textContent))

            setTimeout(() => this.reset_num(3), 20000);
        }else if(Math.abs(num_randomM.textContent - num_a_adivinharM.textContent) < 1000){ // QUASE (>1000)
            popupM.textContent = "QUAAAAAAAAAAAAASE (>1000)"

            popupM.classList.remove("hide");
            popupM.classList.add("show");

            update_user(Math.abs(num_randomM.textContent-num_a_adivinharM.textContent))

            setTimeout(() => this.reset_num(3), 15000);
        }else if(Math.abs(num_randomM.textContent - num_a_adivinharM.textContent) < 10000){ // QUASE (>10000)
            popupM.textContent = "BEM QUASE (>10000)"

            popupM.classList.remove("hide");
            popupM.classList.add("show");

            update_user(Math.abs(num_randomM.textContent-num_a_adivinharM.textContent))

            setTimeout(() => this.reset_num(3), 10000);
        }else if(Math.abs(num_randomM.textContent - num_a_adivinharM.textContent) < 100000){ // QUASE (>100000)
            popupM.textContent = "QUASE (>100000)"

            popupM.classList.remove("hide");
            popupM.classList.add("show");

            update_user(Math.abs(num_randomM.textContent-num_a_adivinharM.textContent))

            setTimeout(() => this.reset_num(3), 8000);
        }else if(Math.abs(num_randomM.textContent - num_a_adivinharM.textContent) < 1000000){ // PERTO (>1000000)
            popupM.textContent = "PERTO (>1000000)"

            popupM.classList.remove("hide");
            popupM.classList.add("show");

            update_user(Math.abs(num_randomM.textContent-num_a_adivinharM.textContent))

            setTimeout(() => this.reset_num(3), 3000);
        }else{ // ERROU
            update_user(Math.abs(num_randomM.textContent-num_a_adivinharM.textContent))
            setTimeout(() => this.reset_num(3), speed);
        }
    }



    function gera_tudo(){ // botao que gera todos os numeros
        if (lock_musica==0 & modo==0){ // tocar musica de fundo se clicar no botao e fast mode nao estiver ativado
            musica_normal.play()
            lock_musica=1
        }

        if(lock_geral[0] & lock_geral[1] & lock_geral[2] & lock_geral[3]){
            numero100()
            numero1000()
            numero10000()
            numeroM()
        }
    }

    function flipInt(n){ // calcula o numero invertido
        var digit, result = 0
        while( n ){
            digit = n % 10  //  Get right-most digit. Ex. 123/10 → 12.3 → 3
            result = (result * 10) + digit  //  Ex. 123 → 1230 + 4 → 1234
            n = n/10|0  //  Remove right-most digit. Ex. 123 → 12.3 → 12
        }  
        return result
    }

    function fastmode(){ //toggle do fastmode
        if(modo==1){
            speed = 500
            modo = 0
            botao_fast_mode.style.color = "black"
            musica_rapida.pause()
            musica_rapida.currentTime=0;
            musica_normal.play()
        }else{
            speed = 10
            modo = 1
            botao_fast_mode.style.color = "red"
            musica_normal.pause()
            musica_normal.currentTime = 0;
            musica_rapida.play()
        }
    }

    function reset_num(num){// mostra o popup e depois remove e gera o novo numero random
        if(num==0){
            popup100.classList.remove("show");
            popup100.classList.add("hide");
            num_random100.textContent = "Generate"
            num_a_adivinhar100.textContent = Math.floor(Math.random() * 101)
            botao100.disabled = false;
            lock_geral[0] = true
        }else if(num==1){
            popup1000.classList.remove("show");
            popup1000.classList.add("hide");
            num_random1000.textContent = "Generate"
            num_a_adivinhar1000.textContent = Math.floor(Math.random() * 1001)
            botao1000.disabled = false;
            lock_geral[1] = true
        }else if(num==2){
            popup10000.classList.remove("show");
            popup10000.classList.add("hide");
            num_random10000.textContent = "Generate"
            num_a_adivinhar10000.textContent = Math.floor(Math.random() * 10001)
            botao10000.disabled = false;
            lock_geral[2] = true
        }else if(num==3){
            popupM.classList.remove("show");
            popupM.classList.add("hide");
            num_randomM.textContent = "GOOD LUCK"
            num_a_adivinharM.textContent = Math.floor(Math.random() * 1000000001)
            botaoM.disabled = false;
            lock_geral[3] = true
        }
    }




    let tem_user = false // para ver se existe algum user logged in
    let numero_maiorM = 0 // melhor numero do user ate agr
    let lock_updateuser = true //para ler apenas 1 vez o recorde
    var top1100 = document.getElementById("top1100")
    var top2100 = document.getElementById("top2100")
    var top3100 = document.getElementById("top3100")
    var top11000 = document.getElementById("top11000")
    var top21000 = document.getElementById("top21000")
    var top31000 = document.getElementById("top31000")
    var top110000 = document.getElementById("top110000")
    var top210000 = document.getElementById("top210000")
    var top310000 = document.getElementById("top310000")
    var top1M = document.getElementById("top1M")
    var top2M = document.getElementById("top2M")
    var top3M = document.getElementById("top3M")

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
            console.log("user: "+nome_user)

            login.textContent = user.email
        }
    }

    async function recordes() {

        const { data: data_recordes } = await client
            .from('users')
            .select('*')


        //console.log(parseInt(data_recordes[0].recordes_gambling[0][1][0].split("_")[0]))
        //console.log(data_recordes[0].nome)
        
        recorde_100 = []
        recorde_1000 = []
        recorde_10000 = []
        recorde_M = []
        
        for (let i = 0; i < data_recordes.length; i++) {
            recorde_100.push([data_recordes[i].nome,parseInt(data_recordes[i].recordes_gambling[0][1][0].split("_")[0])])
            recorde_1000.push([data_recordes[i].nome,parseInt(data_recordes[i].recordes_gambling[0][1][0].split("_")[1])])
            recorde_10000.push([data_recordes[i].nome,parseInt(data_recordes[i].recordes_gambling[0][1][0].split("_")[2])])
            recorde_M.push([data_recordes[i].nome,parseInt(data_recordes[i].recordes_gambling[0][1][0].split("_")[3])])
        }

        recorde_100.sort(compareSecondColumn)
        recorde_1000.sort(compareSecondColumn)
        recorde_10000.sort(compareSecondColumn)
        recorde_M.sort(compareSecondColumn)


        top1100.textContent = recorde_100[recorde_100.length - 1][0]+" - "+recorde_100[recorde_100.length - 1][1]
        top2100.textContent = recorde_100[recorde_100.length - 2][0]+" - "+recorde_100[recorde_100.length - 2][1]
        top3100.textContent = recorde_100[recorde_100.length - 3][0]+" - "+recorde_100[recorde_100.length - 3][1]

        top11000.textContent = recorde_1000[recorde_1000.length - 1][0]+" - "+recorde_1000[recorde_1000.length - 1][1]
        top21000.textContent = recorde_1000[recorde_1000.length - 2][0]+" - "+recorde_1000[recorde_1000.length - 2][1]
        top31000.textContent = recorde_1000[recorde_1000.length - 3][0]+" - "+recorde_1000[recorde_1000.length - 3][1]
        
        top110000.textContent = recorde_10000[recorde_10000.length - 1][0]+" - "+recorde_10000[recorde_10000.length - 1][1]
        top210000.textContent = recorde_10000[recorde_10000.length - 2][0]+" - "+recorde_10000[recorde_10000.length - 2][1]
        top310000.textContent = recorde_10000[recorde_10000.length - 3][0]+" - "+recorde_10000[recorde_10000.length - 3][1]

        top1M.textContent = recorde_M[0][0]+" - "+recorde_M[0][1]
        top2M.textContent = recorde_M[1][0]+" - "+recorde_M[1][1]
        top3M.textContent = recorde_M[2][0]+" - "+recorde_M[2][1]

    }

    async function update_user(tipo){
        if(tem_user){
            
            if(lock_updateuser){
                botaoM.disabled = true;
                const {
                    data: { user },
                        error1
                } = await client.auth.getUser();

                const { data: recordes_a_ser_atualizados } = await client
                    .from('users')
                    .select('recordes_gambling')
                    .eq('email', user.email)

                numero_maiorM = parseInt(recordes_a_ser_atualizados[0].recordes_gambling[0][1][0].split("_")[3])
                lock_updateuser = false
                botaoM.disabled = false
            }

            if(tipo=="t100"){

                const {
                    data: { user },
                        error1
                } = await client.auth.getUser();

                const { data: recordes_a_ser_atualizados } = await client
                .from('users')
                .select('recordes_gambling')
                .eq('email', user.email)

                var antigo = recordes_a_ser_atualizados[0].recordes_gambling[0][1][0].split("_")
                antigo[0] = parseInt(antigo[0]) +1
                antigo = antigo.join("_")
                recordes_a_ser_atualizados[0].recordes_gambling[0][1][0] = antigo
                novo = recordes_a_ser_atualizados[0].recordes_gambling

                const { error: updateError } = await client
                .from('users')
                .update({ recordes_gambling: novo })
                .eq('email', user.email);

                if (updateError) {
                    console.error(updateError);
                } else {
                    console.log('Update aos 100 feito');
                }
            }else if(tipo=="t1000"){

                const {
                    data: { user },
                        error1
                } = await client.auth.getUser();

                const { data: recordes_a_ser_atualizados } = await client
                .from('users')
                .select('recordes_gambling')
                .eq('email', user.email)

                var antigo = recordes_a_ser_atualizados[0].recordes_gambling[0][1][0].split("_")
                antigo[1] = parseInt(antigo[1]) +1
                antigo = antigo.join("_")
                recordes_a_ser_atualizados[0].recordes_gambling[0][1][0] = antigo
                novo = recordes_a_ser_atualizados[0].recordes_gambling

                
                const { error: updateError } = await client
                .from('users')
                .update({ recordes_gambling: novo })
                .eq('email', user.email);

                if (updateError) {
                    console.error(updateError);
                } else {
                    console.log('Update aos 1000 feito');
                }
            }else if(tipo=="t10000"){

                const {
                    data: { user },
                        error1
                } = await client.auth.getUser();

                const { data: recordes_a_ser_atualizados } = await client
                .from('users')
                .select('recordes_gambling')
                .eq('email', user.email)

                var antigo = recordes_a_ser_atualizados[0].recordes_gambling[0][1][0].split("_")
                antigo[2] = parseInt(antigo[2]) +1
                antigo = antigo.join("_")
                recordes_a_ser_atualizados[0].recordes_gambling[0][1][0] = antigo
                novo = recordes_a_ser_atualizados[0].recordes_gambling

                
                const { error: updateError } = await client
                .from('users')
                .update({ recordes_gambling: novo })
                .eq('email', user.email);

                if (updateError) {
                    console.error(updateError);
                } else {
                    console.log('Update aos 10000 feito');
                }
            }else{
                console.log("okay bitch ass...")
                if (tipo < numero_maiorM){

                    const {
                        data: { user },
                            error1
                    } = await client.auth.getUser();

                    const { data: recordes_a_ser_atualizados } = await client
                        .from('users')
                        .select('recordes_gambling')
                        .eq('email', user.email)

                    botaoM.disabled = true;
                    botaoM.textContent = "Updating Leaderboard... (check f12)"
                    
                    console.log(tipo)
                    var antigo = recordes_a_ser_atualizados[0].recordes_gambling[0][1][0].split("_")
                    antigo[3] = tipo
                    antigo = antigo.join("_")
                    recordes_a_ser_atualizados[0].recordes_gambling[0][1][0] = antigo
                    novo = recordes_a_ser_atualizados[0].recordes_gambling

                    const { error: updateError } = await client
                        .from('users')
                        .update({ recordes_gambling: novo })
                        .eq('email', user.email);

                    if (updateError) {
                        console.error(updateError);
                    } else {
                        console.log('Update ao HOLY feito');
                    }
                    numero_maiorM = tipo
                    botaoM.textContent = "HOLY GRAIL"
                    botaoM.disabled = false;

                }
            }
        }
    }

    function compareSecondColumn(a, b) {
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] < b[1]) ? -1 : 1;
        }
    }


    recordes()
    checkUser()
    setTimeout(() => {
        update_user(999999999)
    }, 1000);