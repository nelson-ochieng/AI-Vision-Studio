import * as tf from '@tensorflow/tfjs';
// Cache complete graph artifacts in IndexedDB, including weight shards.
export async function graph(url:string){const key='indexeddb://pretrained-'+encodeURIComponent(url);try{return await tf.loadGraphModel(key)}catch{const model=await tf.loadGraphModel(url,{fromTFHub:url.startsWith('https://tfhub.dev/')});try{await model.save(key);return model}catch(e){model.dispose();throw e}}}
export async function cachedURL(url:string){const key='indexeddb://pretrained-'+encodeURIComponent(url);const models=await tf.io.listModels();if(!models[key]){const m=await graph(url);m.dispose()}return key}
