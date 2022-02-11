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
  import Chart from './chart.svelte';
  import Price from './price.svelte';
  export let coinId;

  interface tabMenu {
    title: string;
    component: any;
  }

  let coinInfo: infoData;
  let coinTicker: ITicker;

  getCoinInfo(coinId).then((data) => (coinInfo = data));
  getCoinTickers(coinId).then((data) => (coinTicker = data));

  const tabMenus = [
    { title: 'Chart', component: Chart },
    { title: 'Price', component: Price },
  ];
  let selectedMenu = tabMenus[0];
  const showClickedMenu = (menu): void => {
    console.log(menu);
    selectedMenu = menu;
  };
</script>

<div class="m-auto max-w-md py-10">
  <header>
    <h1 class="text-center text-cyan-300 text-4xl mb-5">{coinInfo?.name}</h1>
    <div class="flex justify-between bg-black/50 rounded-md text-gray-100 px-6 py-3">
      <dl class="w-1/3 overview flex flex-col items-center flex-grow-1">
        <dt class="text-sm mb-1">Rank</dt>
        <dd class="text-sm">{coinInfo?.rank}</dd>
      </dl>
      <dl class="w-1/3 overview flex flex-col items-center flex-grow-1">
        <dt class="text-sm mb-1">Symbol</dt>
        <dd class="text-sm">{coinInfo?.symbol}</dd>
      </dl>
      <dl class="w-1/3 overview flex flex-col items-center flex-grow-1">
        <dt class="text-sm mb-1">Price</dt>
        <dd class="text-sm">$ {coinTicker?.quotes.USD.price.toFixed(2)}</dd>
      </dl>
    </div>
  </header>

  <article class="py-4 text-gray-100">
    {coinInfo?.description}
  </article>

  <div class="flex justify-between">
    {#each tabMenus as menu}
      <button
        class="w-1/2 mr-2 last:mr-0 bg-black/50 rounded-md "
        on:click={() => showClickedMenu(menu)}>{menu.title}</button
      >
    {/each}
  </div>

  <div>
    <svelte:component this={selectedMenu.component} />
  </div>
</div>
