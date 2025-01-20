'use client'

import React, { createContext, useState } from 'react';

// Create the context
export const ReportDataContext = createContext();

const ReportContext = ({ children }) => {
  // State to manage an array of reports
  const [reports, setReports] = useState([
    {
      id: 1,
      title: 'Time Sheet',
      author: 'Jai',
      content: 'How time sheet is filled within set timelines and navigations',
    },
    {
      id: 2,
      title: 'Inventory Layout',
      author: 'Jai',
      content: 'Let me guide you on how to read an auto layout and what the symbols mean in different situations',
    },
  ]);

  return (
    <ReportDataContext.Provider value={{ reports, setReports }}>
      {children}
    </ReportDataContext.Provider>
  );
};

export default ReportContext;
