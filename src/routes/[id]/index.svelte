<script context="module">
  export const load = async ({ params, url }) => {
    return {
      props: { coinId: params.id },
    };
  };
</script>

<script lang="ts">
  import { getCoinInfo, getCoinTickers } from '$lib/apis/service';
  import type { infoData, ITicker } from '$lib/types/types';
  export let coinId;

  let coinInfo: infoData;
  let coinTicker: ITicker;

  getCoinInfo(coinId).then((data) => (coinInfo = data));
  getCoinTickers(coinId).then((data) => (coinTicker = data));
</script>

<div class="m-auto max-w-md py-10">
  <header>
    <h1 class="text-center text-cyan-300 text-4xl mb-5">{coinInfo?.name}</h1>
    <div class="flex justify-between bg-black/50 rounded-md text-gray-100 p-3">
      <div class="overview">
        <strong>Rank:</strong>
        <strong>{coinInfo?.rank}</strong>
      </div>
      <div class="overview">
        <strong>Symbol:</strong>
        <strong>{coinInfo?.symbol}</strong>
      </div>
      <div class="overview">
        <strong>Price:</strong>
        <strong>$ {coinTicker?.quotes.USD.price.toFixed(2)}</strong>
      </div>
    </div>
  </header>
</div>
