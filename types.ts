
// Import React to resolve 'Cannot find namespace React' errors when using React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  icon: React.ReactNode;
}

export interface Professional {
  title: string;
  icon: React.ReactNode;
}

export interface Differential {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Exam {
  name: string;
}
