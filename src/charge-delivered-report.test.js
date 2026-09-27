import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chargeDeliveredReport } from './charge-delivered-report.js';

for (const eventChargeLimitReached of [false, true]) {
  test(`accepts one charged report when next-charge limit is ${eventChargeLimitReached}`, async () => {
    let calls = 0;
    const result = await chargeDeliveredReport(async (options) => {
      calls++;
      assert.deepEqual(options, { eventName: 'advanced-report', count: 1 });
      return { chargedCount: 1, eventChargeLimitReached };
    });
    assert.equal(result.chargedCount, 1);
    assert.equal(calls, 1);
  });
}
for (const result of [undefined, {}, { chargedCount: 0, eventChargeLimitReached: true }]) {
  test(`refuses a missing charge receipt: ${JSON.stringify(result)}`, async () => {
    await assert.rejects(chargeDeliveredReport(async () => result), /CHARGE_NOT_RECORDED/);
  });
}
test('propagates provider failures without retrying a possible charge', async () => {
  let calls = 0;
  await assert.rejects(chargeDeliveredReport(async () => {
    calls++;
    throw new Error('provider unavailable');
  }), /provider unavailable/);
  assert.equal(calls, 1);
});
