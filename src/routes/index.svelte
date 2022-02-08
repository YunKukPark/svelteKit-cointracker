<script>
  import axios from 'axios';

  let coins = [];
  const response = axios.get('https://api.coinpaprika.com/v1/coins')
                        .then(res => res.data.slice(0,100))
                        .then(data => coins = data);

</script>

<svelte:head>
  <title>코인</title>
</svelte:head>

<ul>
  {#each coins as coin}
    <li>{coin.name}</li>
  {/each}
</ul>