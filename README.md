✨ **Projeto Acadêmico: Pomodoro Sono Timer**  

🔗 **[Visite meu Portfólio](https://m32pinto.github.io/portfoliodomarcos/#travel)**  

## 🎯 **Descrição do Projeto**

Este projeto foi desenvolvido como parte das **práticas de programação** em uma disciplina acadêmica. O objetivo foi criar um **Timer Pomodoro Sono** — uma ferramenta de foco e organização do tempo, inspirada no método Pomodoro, com variações de pausas curtas e longas, ideal para estudantes, profissionais e qualquer pessoa que busca melhorar a produtividade.

O timer segue um ciclo fixo:  
- **25 minutos de foco** → **5 minutos de pausa curta** → **25 minutos de foco** → **5 minutos de pausa curta** → **25 minutos de foco** → **5 minutos de pausa curta** → **25 minutos de foco** → **15 minutos de pausa longa** (após 4 ciclos de foco).

- ## 🧩 **Tecnologias Utilizadas**

- **HTML5** — Estrutura do documento
- **CSS3** — Estilização responsiva e visual agradável
- **JavaScript** — Lógica de controle do timer, eventos e estado
- **Sem dependências externas** — 100% autônomo

- ## 📊 **Funcionalidades**

✅ **Iniciar Timer** — Inicia o ciclo atual (foco, pausa curta ou longa)  
✅ **Pausar Timer** — Pausa o cronômetro em qualquer momento  
✅ **Resetar Timer** — Volta ao início, com reset de contadores  
✅ **Contagem de Ciclos** — Mostra quantos ciclos de foco foram concluídos  
✅ **Status Visual** — Exibe "Foco", "Pausa Curta" ou "Pausa Longa"  
✅ **Interface Responsiva** — Design centrado, com fundo roxo suave e elementos destacados  
✅ **Botão de Navegação** — Vinculado ao portfólio, para fácil acesso

## 🧠 **Desafios e Soluções**

| Desafio | Solução |
|--------|---------|
| **Controle de Fases** | Variáveis globais (`currentPhase`, `currentCycle`, `isRunning`) + lógica de transição entre fases |
| **Atualização do Display** | Função `updateDisplay()` que converte segundos em formato `MM:SS` e atualiza em tempo real |
| **Prevenção de Overlap** | Verificação `if (isRunning)` antes de iniciar novo timer |
| **Controle de Pausas e Reset** | `clearInterval()` + `isRunning` para evitar conflitos |
| **Design Visual** | Uso de cores roxas (RGB) e transições suaves para criar experiência visual agradável |

>  
> A estrutura do código é modular, com funções separadas por responsabilidade:  
> - `initializeTimer()` — Inicialização do estado  
> - `startTimer()` — Lógica de execução  
> - `moveToNextPhase()` — Transição entre fases  
> - `updateDisplay()` — Atualização visual  
>
> > O projeto foi otimizado para **manutenção fácil** e **extensibilidade** — por exemplo, é fácil adicionar novas fases ou alterar durações.
> >
> > ## 📎 **Arquivos do Projeto**

```
- index.html
- style.css
- script.js
```

📌 *Desenvolvido por: Marcos Pinto | 📅 2025 | 🎓 Disciplina: Práticas de Programação*


1 de fevereiro de 2026
