let meuHeroi = "super choque"
let pontosXP = 18349
let nivelDoHeroi

if (pontosXP < 1000) {
    nivelDoHeroi = "ferro"
} else if (pontosXP >= 1001 && pontosXP <= 2000)
    nivelDoHeroi = 'bronze'
    else if (pontosXP >= 2001 && pontosXP <= 5000)
        {nivelDoHeroi = 'prata' }
        else if (pontosXP >= 6001 && pontosXP <= 7000)
            {nivelDoHeroi = "ouro"}
            else if (pontosXP >= 7001 && pontosXP <= 8000)
                {nivelDoHeroi = "platina"}
                else if (pontosXP >= 8001 && pontosXP<= 9000)
                    {nivelDoHeroi = "ascendente"}
                    else if (pontosXP > 9001 && pontosXP <= 10000)
                        {nivelDoHeroi = "imortal"}
                        else if (pontosXP >= 10001)
                            {nivelDoHeroi = "radiante"}
                            console.log ("o heroi de nome: " + meuHeroi + " está no nível de: " + nivelDoHeroi)