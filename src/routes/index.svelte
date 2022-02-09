<script>
  import { getCoins } from '$lib/apis/service';
  import CoinItem from '$lib/components/index/coinItem.svelte';

  let coins = [];
  getCoins().then((data) => (coins = data));
</script>

<svelte:head>
  <title>코인</title>
</svelte:head>

<div class="flex flex-col items-center w-full min-h-screen p-10 ">
  <header class="container mb-9">
    <h1 class="text-white text-center text-4xl">COINS</h1>
  </header>

  <main>
    <ul>
      {#each coins as coin}
        <CoinItem {coin} />
      {/each}
    </ul>
  </main>
</div>
