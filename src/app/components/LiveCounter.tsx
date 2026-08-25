import { useEffect, useState } from 'react';

interface LiveCounterProps {
  /** Valor base al momento de la epoch de referencia (en toneladas) */
  base: number;
  /** Momento (Date) donde el contador tenía el valor `base` */
  epoch: Date;
  /** Kilogramos por segundo que suma el contador */
  ratePerSecondKg: number;
  /** Decimales a mostrar (por defecto 3 = precisión de kilos sobre toneladas) */
  decimals?: number;
  className?: string;
  suffix?: string;
}

/**
 * Contador que se actualiza en tiempo real desde una fecha epoch,
 * asegurando que el valor mostrado sea consistente sin importar cuándo se cargue la página.
 * Usado para métricas acumulativas como toneladas procesadas y CO₂ evitado.
 */
export function LiveCounter({
  base,
  epoch,
  ratePerSecondKg,
  decimals = 3,
  className,
  suffix,
}: LiveCounterProps) {
  const compute = () => {
    const elapsedSeconds = (Date.now() - epoch.getTime()) / 1000;
    return base + (elapsedSeconds * ratePerSecondKg) / 1000; // kg → toneladas
  };

  const [value, setValue] = useState<number>(compute);

  useEffect(() => {
    const id = window.setInterval(() => {
      setValue(compute());
    }, 200);
    return () => window.clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [base, epoch, ratePerSecondKg]);

  const display = value.toLocaleString('es-AR', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return (
    <span className={className}>
      {display}
      {suffix}
    </span>
  );
}
