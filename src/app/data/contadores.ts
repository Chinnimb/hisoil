// Contadores en tiempo real compartidos entre la Home y Portfolio, para que
// muestren siempre el mismo número.

// Epoch de referencia: los valores base están calculados para este momento.
// El contador avanza en tiempo real desde acá.
export const COUNTER_EPOCH = new Date('2026-08-25T00:00:00-03:00');

export const TONELADAS_PROCESADAS = { base: 216854, ratePerSecondKg: 1.15 };

export const EMISIONES_EVITADAS = { base: 118800, ratePerSecondKg: 0.57 };
