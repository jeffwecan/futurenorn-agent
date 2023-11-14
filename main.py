def on_on_chat(levels):
    for index in range(levels):
        for index2 in range(4):
            agent.move(FORWARD, 1)
            if agent.detect(AgentDetection.BLOCK, DOWN):
                agent.destroy(DOWN)
                agent.collect_all()
            agent.turn(LEFT_TURN)
        agent.move(DOWN, 1)
player.on_chat("dig", on_on_chat)

def on_on_chat2(levels2):
    for index3 in range(levels2):
        agent.move(FORWARD, 1)
        if agent.detect(AgentDetection.BLOCK, DOWN):
            agent.destroy(DOWN)
            agent.collect_all()
        agent.turn(LEFT_TURN)
        agent.move(FORWARD, 1)
        if agent.detect(AgentDetection.BLOCK, DOWN):
            agent.destroy(DOWN)
            agent.collect_all()
        agent.move(DOWN, 1)
        agent.turn(RIGHT_TURN)
        if agent.detect(AgentDetection.BLOCK, FORWARD):
            agent.destroy(FORWARD)
            agent.collect_all()
        agent.turn(RIGHT_TURN)
        agent.move(FORWARD, 1)
        agent.turn(LEFT_TURN)
        if agent.detect(AgentDetection.BLOCK, FORWARD):
            agent.destroy(FORWARD)
            agent.collect_all()
player.on_chat("dig_stairs", on_on_chat2)

# Chat Triggers
# when we type "come", the handler (aka function (aka 'def's)) named "when_player_says_come"

def on_on_chat3(levels22, num2, num3):
    player.say("Hello Agent!")
    agent.teleport_to_player()
player.on_chat("come", on_on_chat3)
