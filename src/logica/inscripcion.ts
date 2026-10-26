export function tieneSancionActiva(sanciones: any[], fechaConsulta: string) {
    if (!sanciones || !Array.isArray(sanciones) || sanciones.length === 0) return false;
    const consulta = new Date(fechaConsulta).getTime();

    return sanciones.some(sancion => {
        if (!sancion.activa) return false;
        const inicio = new Date(sancion.fechaInicio).getTime();
        const fin = new Date(sancion.fechaFin).getTime();
        return consulta >= inicio && consulta <= fin;
    });
}

export function equipoCompleto(integrantesActuales: any[], cantidadExigida: number) {
    const cantidad = Array.isArray(integrantesActuales) ? integrantesActuales.length : 0;
    return cantidad >= cantidadExigida;
}