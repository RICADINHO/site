



const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function fetchData() {
  const { data, error } = await supabase
    .from('users') // replace with your actual table name
    .select('id, nome, email');

  if (error) {
    console.error('Error fetching data:', error.message);
    return;
  }

  const tbody = document.querySelector('#data-table tbody');
  data.forEach(row => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${row.id}</td>
      <td>${row.name}</td>
      <td>${row.email}</td>
    `;
    tbody.appendChild(tr);
  });
}

fetchData();