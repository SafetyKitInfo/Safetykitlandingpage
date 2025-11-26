import React from 'react';

export default function DeviceFrame({ children, className = '' }) {
  return (
    <div className={`device-frame ${className}`} style={{ borderRadius: 14, overflow: 'hidden' }}>
      <div style={{ borderRadius: 12, overflow: 'hidden' }}>
        {children}
      </div>
    </div>
  );
}
