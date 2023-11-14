player.onChat("dig", function on_on_chat(levels: any) {
    for (let index = 0; index < levels; index++) {
        for (let index2 = 0; index2 < 4; index2++) {
            agent.move(FORWARD, 1)
            if (agent.detect(AgentDetection.Block, DOWN)) {
                agent.destroy(DOWN)
                agent.collectAll()
            }
            
            agent.turn(LEFT_TURN)
        }
        agent.move(DOWN, 1)
    }
})
player.onChat("dig_stairs", function on_on_chat2(levels2: any) {
    for (let index3 = 0; index3 < levels2; index3++) {
        agent.move(FORWARD, 1)
        if (agent.detect(AgentDetection.Block, DOWN)) {
            agent.destroy(DOWN)
            agent.collectAll()
        }
        
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        if (agent.detect(AgentDetection.Block, DOWN)) {
            agent.destroy(DOWN)
            agent.collectAll()
        }
        
        agent.move(DOWN, 1)
        agent.turn(RIGHT_TURN)
        if (agent.detect(AgentDetection.Block, FORWARD)) {
            agent.destroy(FORWARD)
            agent.collectAll()
        }
        
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
        if (agent.detect(AgentDetection.Block, FORWARD)) {
            agent.destroy(FORWARD)
            agent.collectAll()
        }
        
    }
})
//  Chat Triggers
//  when we type "come", the handler (aka function (aka 'def's)) named "when_player_says_come"
player.onChat("come", function on_on_chat3(levels22: number, num2: number, num3: number) {
    player.say("Hello Agent!")
    agent.teleportToPlayer()
})
