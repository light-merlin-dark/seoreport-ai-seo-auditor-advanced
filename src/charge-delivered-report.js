/** A depleted budget can still mean this report was successfully charged.
 * Apify's eventChargeLimitReached describes the NEXT charge; chargedCount is
 * the receipt for this one. Never report a charged, delivered report as failed.
 */
export async function chargeDeliveredReport(charge) {
  const result = await charge({ eventName: 'advanced-report', count: 1 });
  if (!result || result.chargedCount !== 1) {
    throw new Error('CHARGE_NOT_RECORDED');
  }
  return result;
}
