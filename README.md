# Cerealista Itararé

Site oficial da Cerealista Itararé Ltda. Especializada no comércio internacional de grãos e logística.

## Tecnologias Utilizadas

- **React 19**
- **Vite**
- **Tailwind CSS 4**
- **Motion** (para animações)
- **Lucide React** (ícones)

## Deploy no Vercel

Este projeto está configurado para ser implantado no Vercel. 

### Possíveis problemas de "Branch ou Commit não encontrado"

Se você estiver vendo a mensagem *"The provided GitHub repository does not contain the requested branch or commit reference"*, verifique o seguinte:

1. **Nome da Branch**: O Vercel pode estar tentando fazer o deploy de uma branch chamada `main`, mas o seu repositório pode estar usando `master` (ou vice-versa). No painel do Vercel, vá em **Settings > Git** e verifique se a "Production Branch" está correta.
2. **Repositório Vazio**: Certifique-se de que os arquivos foram enviados para o GitHub. Se você acabou de criar o projeto, aguarde a sincronização inicial.
3. **Reconectar**: Se o problema persistir, tente desconectar o repositório no Vercel e conectá-lo novamente, garantindo que o branch padrão do GitHub seja selecionado.

---

Desenvolvido para Cerealista Itararé Ltda.
