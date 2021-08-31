import { createSlice } from '@reduxjs/toolkit';
import { KeeprDaoToken } from 'services/api/keeperDao';
import { TokenList, Token } from 'services/observables/tokens';
import { APIPool } from 'services/api/bancor';

interface BancorState {
  tokenLists: TokenList[];
  tokens: Token[];
  keeperDaoTokens: KeeprDaoToken[];
  pools: APIPool[];
}

export const initialState: BancorState = {
  tokenLists: [],
  tokens: [],
  keeperDaoTokens: [],
  pools: [],
};

const bancorSlice = createSlice({
  name: 'bancor',
  initialState,
  reducers: {
    setTokenLists: (state, action) => {
      state.tokenLists = action.payload;
    },
    setTokenList: (state, action) => {
      state.tokens = action.payload;
    },
    updateTokens: (state, action) => {
      const tokenToUpdate = action.payload as Token[];
      state.tokens = state.tokens.map(
        (token) =>
          tokenToUpdate.find(
            (updatedToken) => updatedToken.address === token.address
          ) || token
      );
    },
    setKeeperDaoTokens: (state, action) => {
      state.keeperDaoTokens = action.payload;
    },
    setPools: (state, action) => {
      state.pools = action.payload;
    },
  },
});

export const {
  setTokenLists,
  setTokenList,
  setKeeperDaoTokens,
  updateTokens,
  setPools,
} = bancorSlice.actions;

export const bancor = bancorSlice.reducer;
