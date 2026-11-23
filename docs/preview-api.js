/** Read-only browser adapter for the Electron UI. No database is connected. */
const previewUnavailable = async () => ({
  ok: false,
  message: 'Esta é uma prévia visual. Para usar esta função, abra o aplicativo desktop.'
});

const emptyDashboard = () => ({
  acervoTotal: { acervoTotal: 0 },
  disponiveis: { disponiveis: 0 },
  emprestimos: { emprestimos: 0 },
  atrasados: { atrasados: 0 },
  livroMaisLidoGeral: { livro: '-' },
  totalLeiturasGeral: 0,
  livrosNoRankingGeral: 0,
  livrosMaisLidosGeral: [],
  turmaDestaqueMes: [],
  resumoTurmasMes: {},
  devolucoesMes: [],
  emprestimosMes: [],
  livrosMaisLidosMes: []
});

const openDocument = (path) => {
  window.open(new URL(path, window.location.href), '_blank', 'noopener');
  return Promise.resolve({ ok: true });
};

window.bibliotech = {
  books: {
    create: previewUnavailable,
    list: async () => ({ ok: true, payload: [] }),
    search: async () => ({ ok: true, payload: [] }),
    update: previewUnavailable,
    remove: previewUnavailable
  },
  loans: {
    create: previewUnavailable,
    return: previewUnavailable,
    updateDate: previewUnavailable,
    listActive: async () => ({ ok: true, payload: [] })
  },
  reports: {
    getDashboard: async () => ({ ok: true, payload: emptyDashboard() }),
    generatePDF: previewUnavailable
  },
  notifications: {
    listItens: async () => ({ ok: true, payload: [] })
  },
  help: {
    openManual: () => openDocument('assets/documentos/tutorial-bibliotech.pdf'),
    openWrittenManual: () => openDocument('assets/documentos/manual-bibliotech.pdf')
  }
};
