export function ordenarRanking(participantes: any[]) {
    if (!participantes || !Array.isArray(participantes)) return [];
    return [...participantes].sort((a, b) => {
        if (b.puntos !== a.puntos) {
            return b.puntos - a.puntos;
        }
        return b.diferenciaPuntaje - a.diferenciaPuntaje;
    });
}

export function calcularPuntos(resultados: string[], puntosVictoria = 3, puntosDerrota = 0) {
    if (!resultados || !Array.isArray(resultados)) return 0;
    return resultados.reduce((total, res) => {
        if (res === 'victoria') return total + puntosVictoria;
        if (res === 'derrota') return total + puntosDerrota;
        return total;
    }, 0);
}

export function cuposDisponibles(cupoMaximo: number, inscripcionesVigentes: number) {
    const max = Number(cupoMaximo) || 0;
    const vigentes = Number(inscripcionesVigentes) || 0;
    const libres = max - vigentes;
    return libres < 0 ? 0 : libres;
}

export function inscripcionFueraDePlazo(fechaActual: string, fechaCierre: string) {
    const actual = new Date(fechaActual);
    const cierre = new Date(fechaCierre);
    return actual.getTime() > cierre.getTime();
}