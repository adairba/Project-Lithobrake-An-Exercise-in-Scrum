export const name = "projectile";

let projectiles = [];
let projOffset = 15;
let projY = 680;
let projSpeed = 10;
let projW = 10;
let projH = 20;

//push a projectile into the array 
export function Shoot(playerX) 
{
    projectiles.push({
        x: playerX + projOffset,
        y: projY
    });
}

//for every projectile, move it up the screen
export function UpdateProjectile() 
{
    for (let i = 0; i < projectiles.length; i++)
    {
        projectiles[i].y -= projSpeed;
    }

    //all projectiles on screen (i think idk i found it somewhere online)
    projectiles = projectiles.filter(p => p.y > 0);
}

//for every projectile in the array, draw them
export function DrawProjectile(ctx) 
{
    for (let p of projectiles)
    {
        ctx.beginPath();
        ctx.rect(p.x, p.y, projW, projH);
        ctx.closePath();
        ctx.fill();
    }
}