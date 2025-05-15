export interface DateRange {
  fromDate: string;
  toDate: string;
}

export const formatDate = (date: Date): string => {
  return date.toISOString().split('T')[0];
};

export const getCurrentMonthRange = (): DateRange => {
  const now = new Date();
  const from = new Date(now.getFullYear(), now.getMonth(), 1);
  const to = new Date(now.getFullYear(), now.getMonth() + 1, 0);

  return {
    fromDate: formatDate(from),
    toDate: formatDate(to),
  };
};
