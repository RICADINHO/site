    const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZodnduenV5c2JsdGJiaGN1Ymp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2NDc0NTcsImV4cCI6MjA4MTIyMzQ1N30.4zsRoSm524_F1XQTx54ZN99q-hEXU9sBh8kT1fYd1so'
    const SUPABASE_URL = 'https://vhvwnzuysbltbbhcubjw.supabase.co';

  const { createClient } = supabase;
  const client = createClient(SUPABASE_URL, SUPABASE_KEY);

  
checkUser()

  async function checkUser() {
    const {
      data: { user },
      error
    } = await client.auth.getUser();

    if (user) {
      console.log('User is logged in:', user);
      
      const { data: dados_user } = await client
      .from('users')
      .select('*')
      .eq('email', user.email)
      .single();

      console.log(dados_user)
      document.body.innerHTML += `<p>nome: ${dados_user.nome}</p>`;
      document.body.innerHTML += `<p>email: ${dados_user.email}</p>`;
      document.body.innerHTML += `<p>recordes: ${dados_user.recordes_gambling}</p>`;
      document.body.innerHTML += `<p>data de criacao: ${dados_user.data_criacao}</p>`;
      document.body.innerHTML += `<p>cor favorita: ${dados_user.cor_favorita}</p>`;
      document.body.innerHTML += `<p>vibe: ${dados_user.vibe}</p>`;
    } else {
      console.log('No user logged in');
      document.body.innerHTML += `<p>Parabens?</p>`;
      // Optionally redirect to login
      // window.location.href = '/login.html';
    }
  }
  
  async function sair() {
    const { error } = await client.auth.signOut()
    window.location.href = 'https://ricadinho.com/';
  }