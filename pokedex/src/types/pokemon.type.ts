export type Pokemon = {
    id: number;
    name: string;
    types: PokemonType[];
    imageUrl: string;
}

type PokemonType = {
    slot: number;
    type: {
        name: string;
        url: string;
    }
}
