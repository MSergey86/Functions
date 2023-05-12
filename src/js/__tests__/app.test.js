import { healthHero } from "../app";


for (let i = 0; i < 15; i++) {
    test('healthHeroHealthy', () => {
        const hero = {name: 'Воин', health: i};

    const result = healthHero(hero);
    expect(result).toBe("critical");
    })
}

for (let i = 15; i <= 50; i++) {
    test('healthHeroHealthy', () => {
        const hero = {name: 'Охотник', health: i};

    const result = healthHero(hero);
    expect(result).toBe("wounded");
    })
}

for (let i = 51; i <= 100; i++) {
test('healthHeroHealthy', () => {
    const hero = {name: 'Маг', health: i};

const result = healthHero(hero);
expect(result).toBe("healthy");
})
}
