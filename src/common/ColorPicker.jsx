import React from 'react';
import { useTheme } from './ThemeContext';
import { palettes } from './palettes';
import styles from './ColorPickerStyles.module.css';

function ColorPicker() {
  const { changePalette } = useTheme();

  return (
    <div className={styles.container}>
      {Object.keys(palettes).map((paletteName) => (
        <button
          key={paletteName}
          className={styles.paletteButton}
          style={{ backgroundColor: palettes[paletteName].light.primary }}
          onClick={() => changePalette(paletteName)}
        />
      ))}
    </div>
  );
}

export default ColorPicker;