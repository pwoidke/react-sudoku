export interface Board {
  [key: string]: string | null;

  A1: string | null;
  A2: string | null;
  A3: string | null;
  A4: string | null;
  A5: string | null;
  A6: string | null;
  A7: string | null;
  A8: string | null;
  A9: string | null;

  B1: string | null;
  B2: string | null;
  B3: string | null;
  B4: string | null;
  B5: string | null;
  B6: string | null;
  B7: string | null;
  B8: string | null;
  B9: string | null;

  C1: string | null;
  C2: string | null;
  C3: string | null;
  C4: string | null;
  C5: string | null;
  C6: string | null;
  C7: string | null;
  C8: string | null;
  C9: string | null;

  D1: string | null;
  D2: string | null;
  D3: string | null;
  D4: string | null;
  D5: string | null;
  D6: string | null;
  D7: string | null;
  D8: string | null;
  D9: string | null;

  E1: string | null;
  E2: string | null;
  E3: string | null;
  E4: string | null;
  E5: string | null;
  E6: string | null;
  E7: string | null;
  E8: string | null;
  E9: string | null;

  F1: string | null;
  F2: string | null;
  F3: string | null;
  F4: string | null;
  F5: string | null;
  F6: string | null;
  F7: string | null;
  F8: string | null;
  F9: string | null;

  G1: string | null;
  G2: string | null;
  G3: string | null;
  G4: string | null;
  G5: string | null;
  G6: string | null;
  G7: string | null;
  G8: string | null;
  G9: string | null;

  H1: string | null;
  H2: string | null;
  H3: string | null;
  H4: string | null;
  H5: string | null;
  H6: string | null;
  H7: string | null;
  H8: string | null;
  H9: string | null;

  I1: string | null;
  I2: string | null;
  I3: string | null;
  I4: string | null;
  I5: string | null;
  I6: string | null;
  I7: string | null;
  I8: string | null;
  I9: string | null;
}

export function emptyBoard(): Board {
  const emptyBoard: Board = {
    A1: null,
    A2: null,
    A3: null,
    A4: null,
    A5: null,
    A6: null,
    A7: null,
    A8: null,
    A9: null,

    B1: null,
    B2: null,
    B3: null,
    B4: null,
    B5: null,
    B6: null,
    B7: null,
    B8: null,
    B9: null,

    C1: null,
    C2: null,
    C3: null,
    C4: null,
    C5: null,
    C6: null,
    C7: null,
    C8: null,
    C9: null,

    D1: null,
    D2: null,
    D3: null,
    D4: null,
    D5: null,
    D6: null,
    D7: null,
    D8: null,
    D9: null,

    E1: null,
    E2: null,
    E3: null,
    E4: null,
    E5: null,
    E6: null,
    E7: null,
    E8: null,
    E9: null,

    F1: null,
    F2: null,
    F3: null,
    F4: null,
    F5: null,
    F6: null,
    F7: null,
    F8: null,
    F9: null,

    G1: null,
    G2: null,
    G3: null,
    G4: null,
    G5: null,
    G6: null,
    G7: null,
    G8: null,
    G9: null,

    H1: null,
    H2: null,
    H3: null,
    H4: null,
    H5: null,
    H6: null,
    H7: null,
    H8: null,
    H9: null,

    I1: null,
    I2: null,
    I3: null,
    I4: null,
    I5: null,
    I6: null,
    I7: null,
    I8: null,
    I9: null,
  };
  return emptyBoard;
}
