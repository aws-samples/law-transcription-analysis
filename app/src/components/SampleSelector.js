import React, { useCallback } from 'react';

import FilePicker from './FilePicker';

import cs from 'clsx';
import s from './SampleSelector.module.css';

function SampleButton({ sample, active, onSelect, onStop, idx }) {
  const click = useCallback(() => {
    onSelect(sample);
  }, [onSelect, sample]);

  return (
    <div>
      <button className={cs(s.sampleButton, active && s.playing)} onClick={active ? onStop : click} />
      <span>Exemplo {idx}</span>
    </div>
  );
}

export default function SampleSelector({ samples, activeSample, onSelect, onStop, hidden }) {
  const startMic = useCallback(() => {
    onSelect(0);
  }, [onSelect]);

  const filesSubmitted = useCallback(
    (files) => {
      const first = files[0];
      const url = URL.createObjectURL(first);
      const audio = new Audio(url);
      onSelect(audio);
    },
    [onSelect],
  );
  return (
    <div className={cs(s.base, hidden && s.hidden)}>
      <button className={cs(s.dictateAudio)} onClick={startMic}>
        Transcrição
      </button>
      <FilePicker onSubmit={filesSubmitted} />
      <div className={s.presets}>
        {Object.keys(samples).map((s, i) => (
          <SampleButton
            idx={i + 1}
            key={i}
            sample={samples[s]}
            active={activeSample === samples[s]}
            onSelect={onSelect}
            onStop={onStop}
          />
        ))}
      </div>
      <div className={s.credit}>
        <small>
          Exemplos foram retirados do site do <a href='https://www.tre-ms.jus.br/servicos-judiciais/sessoes-de-julgamento/audio-das-sessoes'>Tribunal Regional Eleitoral - MS</a>
        </small>
      </div>
    </div>
  );
}
