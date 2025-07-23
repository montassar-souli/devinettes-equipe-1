export interface DevinetteItem {
    id: number
    number: number
    icon: string
    title: string
    text: string
}

export interface TeamData {
    teamName: string
    teamNumber: number
    riddles: DevinetteItem[]
}

export const teamsData: TeamData[] = [
    {
        teamName: "Équipe 1",
        teamNumber: 1,
        riddles: [
            {
                id: 1,
                number: 1,
                icon: "🌱",
                title: "Gestion du Trafic",
                text: "Je te fais gagner du temps sans klaxonner, je suis coordonné et bien programmé. Je gère les routes comme un chef de gare."
            },
            {
                id: 2,
                number: 2,
                icon: "🌍",
                title: "Stationnement Intelligent",
                text: "Je permets aux habitants de trouver une place, avec mon application, le stress s'efface. Je suis rapide, pratique et souvent apprécié. Qui suis-je pour les voitures stationnées ?"
            },
            {
                id: 3,
                number: 3,
                icon: "♻️",
                title: "Énergie Solaire",
                text: "Je capte le soleil, non pour bronzer, mais pour éclairer et chauffer la ville. Qui suis-je ?"
            }
        ]
    },
    {
        teamName: "Équipe 2",
        teamNumber: 2,
        riddles: [
            {
                id: 1,
                number: 1,
                icon: "🌱",
                title: "Gestion de l'Eau",
                text: "Mes déchets ne sont pas jetés, mais transformés en énergie ou en nouvelle matière.\nQui suis-je ?"
            },
            {
                id: 2,
                number: 2,
                icon: "🌍",
                title: "Collecte Intelligente",
                text: "Je roule sans bruit, je ne pollue pas, je me charge pendant les arrêts. En ville, on me préfère au moteur à explosion.\nQui suis-je ?"
            },
            {
                id: 3,
                number: 3,
                icon: "♻️",
                title: "Climat Urbain",
                text: "J’analyse les données pour mieux décider,je rends la ville plus verte et mieux gérée. Je suis invisible, mais on parle de moi dans tous les projets."
            }
        ]
    },
    {
        teamName: "Équipe 3",
        teamNumber: 3,
        riddles: [
            {
                id: 1,
                number: 1,
                icon: "🌱",
                title: "Mobilité Douce",
                text: "Je ne suis pas un humain mais j'observe les champs du ciel.Grâce à moi, les agriculteurs savent quand arroser ou récolter. Je capte les données, j'analyse le sol et le climat. Qui suis-je ?"
            },
            {
                id: 2,
                number: 2,
                icon: "🌍",
                title: "Bâtiments Intelligents",
                text: "Je transforme des déchets organiques en engrais naturel.\nQui suis-je ?"
            },
            {
                id: 3,
                number: 3,
                icon: "♻️",
                title: "Espaces Verts Connectés",
                text: "Je roule doucement dans les champs,avec précision, je suis bien plus qu’un géant. Je plante, je sème, et je récolte parfois.\nQui suis-je ?"
            }
        ]
    },
    {
        teamName: "Équipe 4",
        teamNumber: 4,
        riddles: [
            {
                id: 1,
                number: 1,
                icon: "🌱",
                title: "Réseau 5G",
                text: "J'utilise très peu d'eau et je peux cultiver dans des endroits secs. J'irrigue directement la racine de la plante."
            },
            {
                id: 2,
                number: 2,
                icon: "🌍",
                title: "Sécurité Urbaine",
                text: "Je transforme des déchets organiques en engrais naturel.\nQui suis-je ?"
            },
            {
                id: 3,
                number: 3,
                icon: "♻️",
                title: "Smart Grid",
                text: "Je recycle les déchets, je nourris la terre. Je rends les sols fertiles sans polluer l’atmosphère."
            }
        ]
    }
]

// Helper function to get data for a specific team
export const getTeamData = (teamNumber: number): TeamData | undefined => {
    return teamsData.find(team => team.teamNumber === teamNumber)
}

// Helper function to get all team names
export const getAllTeamNames = (): string[] => {
    return teamsData.map(team => team.teamName)
}