
create TABLE organizer(
    id SERIAL PRIMARY KEY,
    lastname VARCHAR(255),
    firstname VARCHAR(255),
    patronymic VARCHAR(255),
    address_organizer VARCHAR(255),
    telephone VARCHAR(255),
    mail VARCHAR(255)
);

create TABLE tournament(
    id SERIAL PRIMARY KEY,
    name_tournament VARCHAR(255),
    date_start DATE,
    date_end DATE,
    prize_fund VARCHAR(255),
    sponsor VARCHAR(255)
);

create TABLE player(
    id SERIAL PRIMARY KEY,
    lastname VARCHAR(255),
    firstname VARCHAR(255),
    patronymic VARCHAR(255),
    age INTEGER,
    game_nickname VARCHAR(255)
);

create TABLE match(
    id SERIAL PRIMARY KEY,
    date_match DATE,
    time_match TIMESTAMPTZ,
    idplayer1 INTEGER,
    idplayer2 INTEGER,
    idplayer3 INTEGER,
    idplayer4 INTEGER,
    idplayer5 INTEGER,
    FOREIGN KEY (idplayer1) REFERENCES player (id),
    FOREIGN KEY (idplayer2) REFERENCES player (id),
    FOREIGN KEY (idplayer3) REFERENCES player (id),
    FOREIGN KEY (idplayer4) REFERENCES player (id),
    FOREIGN KEY (idplayer5) REFERENCES player (id)
);

create TABLE results(
    id SERIAL PRIMARY KEY,
    id_organizer INTEGER,
    id_tournament INTEGER,
    number_matches INTEGER,
    id_player_winner INTEGER,
    FOREIGN KEY (id_organizer) REFERENCES organizer (id),
    FOREIGN KEY (id_tournament) REFERENCES tournament (id),
    FOREIGN KEY (id_player_winner) REFERENCES player (id)
);