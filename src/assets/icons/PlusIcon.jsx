import { SvgIcon } from '@mui/material';
import React from 'react';

const PlusIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 18 19">
      <path
        d="M16.3615 7.358H10.6379V1.6392C10.6379 0.7339 9.9075 0 9.0023 0C8.0971 0 7.3671 0.733901 7.3671 1.6396V7.362H1.6407C0.735501 7.362 -0.000399345 8.0959 6.55114e-07 9.0015C-0.000399345 9.4539 0.1824 9.8687 0.4786 10.1649C0.7752 10.4619 1.1844 10.6494 1.6364 10.6494H7.3671V16.3639C7.3671 16.8167 7.5467 17.2267 7.8433 17.5225C8.1399 17.8191 8.5479 18.0026 9.0007 18.0026C9.9056 18.0026 10.6379 17.2687 10.6379 16.3639V10.649H16.3615C17.2667 10.649 18.0007 9.9087 18.0003 9.0035C17.9999 8.0987 17.2659 7.358 16.3615 7.358Z"
        fill="white"
      />
    </SvgIcon>
  );
};

export default PlusIcon;