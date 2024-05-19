// userInfo.js

function createUserProfiles(names, modifiedNames) {
    return names.map((name, index) => {
        return {
            originalName: name,
            modifiedName: modifiedNames[index],
            id: index + 1 // auto-incremented starting from 1
        };
    });
}

module.exports = { createUserProfiles };