<script>
  import { onMount } from 'svelte';

  let myanmarTime = '';

  function updateMyanmarTime() {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const myanmarOffset = 6.5 * 60 * 60000; // Myanmar UTC+6:30 in ms
    const myanmarDate = new Date(utc + myanmarOffset);
    myanmarTime = myanmarDate.toLocaleTimeString('en-GB', { hour12: false });
  }

  let interval;
  onMount(() => {
    updateMyanmarTime();
    interval = setInterval(updateMyanmarTime, 1000);
    return () => clearInterval(interval);
  });

  const message = `Dear Ronald,

I just want to say a huge THANK YOU for this amazing Christmas gift! 
Your thoughtfulness and support mean the world to me. 
This web page is my first creation inspired by you — a small token of appreciation for everything you do. 
I hope it brings a smile to your face and shows how much your gift has motivated me to chase my coding dreams. 
I love you, and I promise to keep building, learning, and making you proud. 
Merry Christmas, my brilliant brother!`;
</script>

<main class="container">
  <h1 class="title">🎄 Thank You, My Brother! 🎄</h1>
  <p class="message">{message}</p>
  <h2 class="time">Myanmar Time: <span>{myanmarTime}</span></h2>
  <div class="confetti">
    {#each Array(50) as _, i}
      <div class="confetti-piece" style="--i:{i}"></div>
    {/each}
  </div>
</main>

<style>
  :global(body) {
    margin:0;
    background: linear-gradient(135deg, #f9d423, #ff4e50, #1a2a6c);
    font-family: 'Segoe UI', sans-serif;
    color: #fff;
    overflow-x: hidden;
  }

  .container {
    text-align: center;
    padding: 2rem;
  }

  .title {
    font-size: 3rem;
    font-weight: bold;
    background: linear-gradient(90deg, #ffefba, #ffffff, #ffefba);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: bounce 2s infinite;
  }

  .message {
    max-width: 700px;
    margin: 2rem auto;
    line-height: 1.6;
    font-size: 1.1rem;
    color: #ffeaa7;
    text-shadow: 1px 1px 2px #000;
  }

  .time {
    font-size: 2rem;
    margin-top: 1.5rem;
    color: #81ecec;
    text-shadow: 2px 2px 5px #000;
    animation: pulse 1.5s infinite;
  }

  @keyframes bounce {
    0%,100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }

  @keyframes pulse {
    0%,100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }

  /* Confetti animation */
  .confetti-piece {
    position: absolute;
    width: 10px;
    height: 10px;
    background-color: hsl(calc(var(--i)*7.2), 80%, 60%);
    top: -10px;
    left: calc(var(--i)*20px);
    opacity: 0.8;
    transform: rotate(45deg);
    animation: fall 5s linear infinite;
  }

  @keyframes fall {
    0% { transform: translateY(0) rotate(0deg); }
    100% { transform: translateY(100vh) rotate(360deg); }
  }

</style>