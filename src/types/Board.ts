export interface Board {
  [key: string]: string;

  A1: string;
  A2: string;
  A3: string;
  A4: string;
  A5: string;
  A6: string;
  A7: string;
  A8: string;
  A9: string;

  B1: string;
  B2: string;
  B3: string;
  B4: string;
  B5: string;
  B6: string;
  B7: string;
  B8: string;
  B9: string;

  C1: string;
  C2: string;
  C3: string;
  C4: string;
  C5: string;
  C6: string;
  C7: string;
  C8: string;
  C9: string;

  D1: string;
  D2: string;
  D3: string;
  D4: string;
  D5: string;
  D6: string;
  D7: string;
  D8: string;
  D9: string;

  E1: string;
  E2: string;
  E3: string;
  E4: string;
  E5: string;
  E6: string;
  E7: string;
  E8: string;
  E9: string;

  F1: string;
  F2: string;
  F3: string;
  F4: string;
  F5: string;
  F6: string;
  F7: string;
  F8: string;
  F9: string;

  G1: string;
  G2: string;
  G3: string;
  G4: string;
  G5: string;
  G6: string;
  G7: string;
  G8: string;
  G9: string;

  H1: string;
  H2: string;
  H3: string;
  H4: string;
  H5: string;
  H6: string;
  H7: string;
  H8: string;
  H9: string;

  I1: string;
  I2: string;
  I3: string;
  I4: string;
  I5: string;
  I6: string;
  I7: string;
  I8: string;
  I9: string;
}

export function emptyBoard(): Board {
  const emptyBoard: Board = {
    A1: '',
    A2: '',
    A3: '',
    A4: '',
    A5: '',
    A6: '',
    A7: '',
    A8: '',
    A9: '',

    B1: '',
    B2: '',
    B3: '',
    B4: '',
    B5: '',
    B6: '',
    B7: '',
    B8: '',
    B9: '',

    C1: '',
    C2: '',
    C3: '',
    C4: '',
    C5: '',
    C6: '',
    C7: '',
    C8: '',
    C9: '',

    D1: '',
    D2: '',
    D3: '',
    D4: '',
    D5: '',
    D6: '',
    D7: '',
    D8: '',
    D9: '',

    E1: '',
    E2: '',
    E3: '',
    E4: '',
    E5: '',
    E6: '',
    E7: '',
    E8: '',
    E9: '',

    F1: '',
    F2: '',
    F3: '',
    F4: '',
    F5: '',
    F6: '',
    F7: '',
    F8: '',
    F9: '',

    G1: '',
    G2: '',
    G3: '',
    G4: '',
    G5: '',
    G6: '',
    G7: '',
    G8: '',
    G9: '',

    H1: '',
    H2: '',
    H3: '',
    H4: '',
    H5: '',
    H6: '',
    H7: '',
    H8: '',
    H9: '',

    I1: '',
    I2: '',
    I3: '',
    I4: '',
    I5: '',
    I6: '',
    I7: '',
    I8: '',
    I9: '',
  };
  return emptyBoard;
}
