const { Worker } = require('worker_threads');

function runSumWorker(limit) {
  return new Promise((resolve, reject) => {
    const worker = new Worker('./sumWorker.js', { workerData: { limit } });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0) reject(new Error(`Worker nie dziala exit code ${code}`));
    });
  });
}

async function main() {
  const limits = [1e6, 2e6, 3e6, 4e6];
  const start = Date.now();
  const promises = limits.map(limit => runSumWorker(limit));
  const results = await Promise.all(promises);
  const time = Date.now() - start;
  results.forEach((sum, i) => {
    console.log(`Suma dla limitu=${limits[i]}: ${sum}`);
  });
  console.log(`Całkowity czas: ${time} ms`);
}

main().catch(console.error);
