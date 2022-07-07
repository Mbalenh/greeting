describe("The Greeting Function", function(){
    it ('should return a greeting in the selected language with the name', function() {
        let greetingDom = Greeting([]);
        
        assert.equal(greetingDom.greet('Mbali', 'english'), 'Hello, Mbali')
    })
    it ('should return a greeting in the selected language with the name', function() {
        let greetingDom = Greeting([]);
        assert.equal(greetingDom.greet('Khanya', 'isizulu'), 'Sawubona, Khanya')
    })
    it ('should return a greeting in the selected language with the name', function() {
        let greetingDom = Greeting([]);
        assert.equal(greetingDom.greet('Khanya','isixhosa'), 'Molo, Khanya')
    })
    it ('should return an error if language is not selected', function() {
        let greetingDom = Greeting([]);
        assert.equal(greetingDom.greet('Mbali', null ), 'please select language')

    })
    it ('should return an error message,if the name is not entered', function() {
        let greetingDom = Greeting([]);
        assert.equal(greetingDom.greet('','english'), 'please enter username')
    })
    it ('should return an error message,if the name is not entered', function() {
        let greetingDom = Greeting([]);
        assert.equal(greetingDom.greet('',''), 'please enter username')
    })
})