var users = [{
        username: 'larry',
        email: 'larry@foo.com',
        yearsExperience: 22.1,
        favoriteLanguages: ['Perl', 'Java', 'C++'],
        favoriteEditor: 'Vim',
        hobbies: ['Fishing', 'Sailing', 'Hiking'],
        hometown: {
            city: 'San Francisco',
            state: 'CA'
        }
    },
    {
        username: 'jane',
        email: 'jane@test.com',
        yearsExperience: 33.9,
        favoriteLanguages: ['Haskell', 'Clojure', 'PHP'],
        favoriteEditor: 'Emacs',
        hobbies: ['Swimming', 'Biking', 'Hiking'],
        hometown: {
            city: 'New York',
            state: 'NY'
        }
    },
    {
        username: 'sam',
        email: 'sam@test.com',
        yearsExperience: 8.2,
        favoriteLanguages: ['JavaScript', 'Ruby', 'Python', 'Go'],
        favoriteEditor: 'Atom',
        hobbies: ['Golf', 'Cooking', 'Archery'],
        hometown: {
            city: 'Fargo',
            state: 'SD'
        }
    },
    {
        username: 'anne',
        email: 'anne@test.com',
        yearsExperience: 4,
        favoriteLanguages: ['C#', 'C++', 'F#'],
        favoriteEditor: 'Visual Studio Code',
        hobbies: ['Tennis', 'Biking', 'Archery'],
        hometown: {
            city: 'Albany',
            state: 'NY'
        }
    },
    {
        username: 'david',
        email: 'david@test.com',
        yearsExperience: 12.5,
        favoriteLanguages: ['JavaScript', 'C#', 'Swift'],
        favoriteEditor: 'VS Code',
        hobbies: ['Volunteering', 'Biking', 'Coding'],
        hometown: {
            city: 'Los Angeles',
            state: 'CA'
        }
    }
];

// Part 1

function printEmails(arr) {
    arr.forEach(function(elem) {
        let email = elem.email;
        console.log(email);
    });
}

//printEmails(users)
console.log("\n");

function printHobbies(arr) {
    arr.forEach(function(elem) {
        let hobbies = elem.hobbies;
        hobbies.forEach(function(hobby) {
            console.log(hobby);
        });
    });
}

//printHobbies(users);
console.log("\n");

function findHometownByState(state) {
    let result = users.find(function(elem) {
        let hometown_obj = elem.hometown;
        //console.log(hometown_obj);
        return hometown_obj.state === state;
    });
    //console.log(result)
    return result;
}

findHometownByState('CA');

// How the hell do I use filter for this?
function allLanguages() {
    let result = [];
    users.forEach(function(elem) {
        let fav_langs = elem.favoriteLanguages;

        fav_langs.forEach(function(lang) {
            if (!result.includes(lang)) {
                result.push(lang);
            }
        });
    });
    return result;

}

console.log(allLanguages())

function hasFavoriteEditor(editor) {
    return users.some(function(val) {
        return val.favoriteEditor === editor;
    });
}

console.log(hasFavoriteEditor('VS Code'))
console.log(hasFavoriteEditor('Eclipse'))

function findByUsername(name) {
    var result = users.find(function(val) {
        return name === val.username;
    });
    return result;
}

console.log(findByUsername('david'));

// Part 2
function vowelCount(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

    let tokens = word.split("");

    return tokens.reduce(function(acc, curr) {
        if (vowels.includes(curr)) {
            if (acc.hasOwnProperty(curr)) {
                acc[curr] = acc[curr] + 1;
            } else {
                acc[curr] = 1;
            }
        }
        return acc;
    }, {});

}

console.log(vowelCount('awesome'))

// y doesn't count as a vowel for this function
function removeVowels(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let tokens = word.split("");

    return tokens.reduce(function(acc, curr) {
        if (!vowels.includes(curr)) {
            acc.push(curr);
        }
        return acc;
    }, []);

}

console.log(removeVowels('amazing'))