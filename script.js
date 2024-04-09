document.addEventListener('DOMContentLoaded', function() {
    const generatePasswordButton = document.getElementById('generate-password');
    const copyToClipboardButton = document.getElementById('copy-to-clipboard');
    const passwordDisplay = document.getElementById('password-display');
  
    generatePasswordButton.addEventListener('click', function() {
      const length = document.getElementById('password-length').value;
      const includeUppercase = document.getElementById('include-uppercase').checked;
      const includeLowercase = document.getElementById('include-lowercase').checked;
      const includeNumbers = document.getElementById('include-numbers').checked;
      const includeSymbols = document.getElementById('include-symbols').checked;
  
      const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
      passwordDisplay.textContent = password;
    });
  
    copyToClipboardButton.addEventListener('click', function() {
      const password = passwordDisplay.textContent;
      if (password) {
        navigator.clipboard.writeText(password).then(function() {
          alert('Senha copiada para a área de transferência!');
        }, function() {
          alert('Falha ao copiar a senha para a área de transferência!');
        });
      }
    });
  
    function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
        let result = '';
        let characters = '';
        if (includeLowercase) {
            characters += 'abcdefghijklmnopqrstuvwxyz';
        }
        if (includeUppercase) {
            characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        }
        if (includeNumbers) {
            characters += '0123456789';
        }
        if (includeSymbols) {
            characters +='!@#$%^&*()_+-=[]{}|;:,.<>?';
        }
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
          counter += 1;
        }
        return result;
    }
  });
  