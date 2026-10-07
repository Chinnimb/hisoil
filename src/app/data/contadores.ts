// Contadores en tiempo real compartidos entre la Home y Portfolio, para que
// muestren siempre el mismo número. Se usan como <LiveCounter {...CONTADOR} />.

// Epoch de referencia: los valores base están calculados para este momento.
// El contador avanza en tiempo real desde acá.
const COUNTER_EPOCH = new Date('2026-08-25T00:00:00-03:00');

export const TONELADAS_PROCESADAS = {
  base: 216854,
  epoch: COUNTER_EPOCH,
  ratePerSecondKg: 1.15,
  suffix: ' t',
};

export const EMISIONES_EVITADAS = {
  base: 118800,
  epoch: COUNTER_EPOCH,
  ratePerSecondKg: 0.57,
  suffix: ' t CO₂',
};
