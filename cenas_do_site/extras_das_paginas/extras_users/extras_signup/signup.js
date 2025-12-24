    document.getElementById("myNav").style.display = "block";

    var musica_fundo = document.getElementById("musica_fundo");
    var div_principal = document.getElementById("div_principal");
    var div_secundaria = document.getElementById("div_secundaria");
    var input_cor = document.getElementById("input_cor");
    var input_nome = document.getElementById("nome");
    var input_email = document.getElementById("email");
    var input_pass = document.getElementById("pass");
    var input_pass2 = document.getElementById("pass2");
    var input_vibe = document.getElementById("vibe");
    var submeter = document.getElementById("submeter");
    var body = document.getElementById("body");
    var messageDiv = document.getElementById('message');

    function mudar(ev){
        const color = input_cor.value;//ev.target.value;
        //console.log(input_cor.value);
        //console.log(r,b,g);
        var r = parseInt(color.substr(1,2), 16);
        var g = parseInt(color.substr(3,2), 16);
        var b = parseInt(color.substr(5,2), 16);

        div_secundaria.style.color = "rgb("+r+","+g+","+b+")";
        input_nome.style.backgroundColor = "rgb("+r+","+g+","+b+")";
        input_email.style.backgroundColor = "rgb("+r+","+g+","+b+")";
        input_pass.style.backgroundColor = "rgb("+r+","+g+","+b+")";
        input_pass2.style.backgroundColor = "rgb("+r+","+g+","+b+")";
        input_vibe.style.backgroundColor = "rgb("+r+","+g+","+b+")";
        submeter.style.backgroundColor = "rgb("+r+","+g+","+b+")";
        input_cor.style.backgroundColor = "rgb("+r+","+g+","+b+")";
        body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
        
        r = 255 - parseInt(color.substr(1,2), 16);
        g = 255 - parseInt(color.substr(3,2), 16);
        b = 255 - parseInt(color.substr(5,2), 16);

        div_principal.style.borderColor = "rgb("+r+","+g+","+b+")";
        div_secundaria.style.borderColor = "rgb("+r+","+g+","+b+")";
        input_nome.style.color = "rgb("+r+","+g+","+b+")";
        input_email.style.color = "rgb("+r+","+g+","+b+")";
        input_pass.style.color = "rgb("+r+","+g+","+b+")";
        input_pass2.style.color = "rgb("+r+","+g+","+b+")";
        input_vibe.style.color = "rgb("+r+","+g+","+b+")";
        submeter.style.color = "rgb("+r+","+g+","+b+")";
        input_nome.style.borderColor = "rgb("+r+","+g+","+b+")";
        input_email.style.borderColor = "rgb("+r+","+g+","+b+")";
        input_pass.style.borderColor = "rgb("+r+","+g+","+b+")";
        input_pass2.style.borderColor = "rgb("+r+","+g+","+b+")";
        input_vibe.style.borderColor = "rgb("+r+","+g+","+b+")";
        submeter.style.borderColor = "rgb("+r+","+g+","+b+")";
        input_cor.style.borderColor = "rgb("+r+","+g+","+b+")";
    }

    function closeNav() {
        document.getElementById("myNav").style.display = "none";
    }

    function xau(){
        window.location.href = 'https://ricadinho.com/';    
    }

    function check(){
      console.log(input_nome.value)
      console.log(input_email.value)
      console.log(input_vibe.options[input_vibe.selectedIndex].text)
      console.log(input_cor.value)
        if(input_nome.value.toString().length < 3){
          return "nome tem de ter mais de 2 caracteres"
        }else if(input_pass.value != input_pass2.value){
          return "passes nao sao iguais"
        }else if(input_vibe.options[input_vibe.selectedIndex].text == "-- select an option --"){
          return "Vibe?"
        }else{
          return "nada"
        }
    }


    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZodnduenV5c2JsdGJiaGN1Ymp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2NDc0NTcsImV4cCI6MjA4MTIyMzQ1N30.4zsRoSm524_F1XQTx54ZN99q-hEXU9sBh8kT1fYd1so'
    const SUPABASE_URL = 'https://vhvwnzuysbltbbhcubjw.supabase.co';

    const { createClient } = supabase;
    const client = createClient(SUPABASE_URL, SUPABASE_KEY);

    async function signup() {

      var msg_erro = check()
      if (msg_erro!="nada"){
        messageDiv.textContent = msg_erro;
        console.error('erro no check():', msg_erro);
        return;
      }

      const email = input_email.value
      const nome_signup = input_nome.value
      const cor_signup = input_cor.value
      const vibe_signup = input_vibe.options[input_vibe.selectedIndex].text
      const password = input_pass.value


      const { data: NomeExise } = await client
      .from('users')
      .select('*')
      .eq('nome', nome_signup)
      .single();

      if (NomeExise) {
        messageDiv.textContent = nome_signup+' is already taken';
        return;
      }


      const { data, error } = await client.auth.signUp({ email, password });

      if (error) {
        messageDiv.textContent = error.message;
        console.error('Signup error:', error);
        return;
      }

      if (data.user) {
        const { error: insertError } = await client
          .from('users') // Replace with your actual table name
          .insert([
            {
              nome: nome_signup,
              email: email,
              vibe: vibe_signup,
              cor_favorita: cor_signup
              // id and data_criacao will auto-generate
            }
          ]);

        if (insertError) {
          messageDiv.textContent = insertError.message;
          console.error('Insert error:', insertError);
        } else {
          messageDiv.textContent = 'Welcome to your new reality, CHECK YOUR EMAIL!';
          console.log('User and profile saved!');
        }
      }
    }