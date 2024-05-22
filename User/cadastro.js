document.getElementById('cadastroForm').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const nome = document.getElementById('primeiroNome').value;
    const sobrenome = document.getElementById('segundoNome').value;
    const email = document.getElementById('emailUsuario').value;
    const senha = document.getElementById('senhaHash').value;
  
    try {
      const response = await axios.post('https://backend-sistema-patb3dmj7-juliawletts-projects.vercel.app/register', {
        primeiroNome: nome,
        segundoNome: sobrenome ,
        emailUsuario: email,
        senhaHash: senha
      });
  
      console.log(response.data); // Adicione esta linha para verificar o conteúdo do response

      document.getElementById('mensagem').innerText = response.data.message;
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      document.getElementById('mensagem').innerText = 'Erro ao cadastrar. Por favor, tente novamente mais tarde.';
    }
  });
  