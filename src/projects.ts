export type Project={id:string;name:string};const key='vision-projects-v1';export function projects():Project[]{try{const p=JSON.parse(localStorage.getItem(key)||'[]');if(Array.isArray(p)&&p.length&&p.every(x=>typeof x.id==='string'&&typeof x.name==='string'))return p}catch{}return [{id:'default',name:'Default workspace'}]}
export function activeProject(){const id=localStorage.getItem('vision-active-project');return projects().find(p=>p.id===id)?.id||'default'}
export function selectProject(id:string){if(!projects().some(p=>p.id===id))throw Error('Unknown project');localStorage.setItem('vision-active-project',id)}
export function createProject(name:string){if(!name.trim())throw Error('Enter a project name');const p={id:crypto.randomUUID(),name:name.trim()};localStorage.setItem(key,JSON.stringify([...projects(),p]));return p}
export function scopedKey(key:string,id:string){return id==='default'?key:id+':'+key}
export function modelKey(id:string){return 'indexeddb://vision-classifier'+(id==='default'?'':'-'+id)}
