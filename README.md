[![Gitpod ready-to-code](https://img.shields.io/badge/Gitpod-ready--to--code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/ricardolinog/jogodobicho-dbot)

# Bichero - A Discord Bot
Based in a brazilian gamble game (aka \"Jogo do Bicho\", \"Animal Game\" as a literal translation). It's just for fun (doesn't use real currency).

## How to Setup
- Install node dependencies using `npm install`
- Set `BOT_TOKEN` variable environment. Check with Administrator.

## How to Run
- Run project using `npm start`

## Command List
The default prefix is `r$`, followed by a command name and a argument.
`r$<command> [arguments]`

- ### `r$bet [animal group name]`
  Set a bet in a animal group. The accepted values are: 
  `['avestruz', 'aguia', 'burro', 'borboleta', 'cachorro', 'cabra', 'carneiro', 'camelo', 'cobra', 'coelho', 'cavalo', 'elefante', 'galo', 'gato', 'jacare', 'leao', 'macaco', 'porco', 'pavao', 'peru', 'touro', 'tigre', 'urso', 'veado', 'vaca']`

  Example: `r$bet aguia`
