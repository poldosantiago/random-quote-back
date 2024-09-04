function JSONParse<Retorno>(json: string): Retorno{
    return JSON.parse(json) as Retorno;
}

export default JSONParse;