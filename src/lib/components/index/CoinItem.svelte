<script lang="ts">
  export let coin;
  const { id, name, symbol } = coin;
</script>

<li class="bg-slate-50 text-gray-700 mb-3 rounded-lg">
  <a href={`/${id}`} class="flex justify-between items-center px-10 py-5">
    <div class="flex items-center">
      <img
        class="w-8 h-8 mr-3"
        src={`https://cryptoicon-api.vercel.app/api/icon/${symbol.toLowerCase()}`}
        alt={name}
      />
      <p>{name}</p>
    </div>

    <span>👉🏻</span>
  </a>
</li>
