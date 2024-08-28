export const GET_TRANSACTIONS = `
  query MyQuery {
    logs(limit: 6, order_by: { block_timestamp: asc }) {
      transaction_hash
      block_timestamp
    }
  }
`;
