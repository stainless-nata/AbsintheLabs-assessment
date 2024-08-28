export type ActivityItem = {
  activity: string;
  point: string;
  date: Date;
  txid: string;
  extra: string;
};

export type Transaction = {
  transaction_hash: string;
  block_timestamp: string;
};
