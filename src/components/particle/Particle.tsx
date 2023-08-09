import {useCallback} from "react";
import Particles from "react-tsparticles";
import type {Container, Engine} from "tsparticles-engine";
import { loadFull } from "tsparticles";
import {loadSlim} from "tsparticles-slim";

export const Particle = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);
    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onHover: {
                            enable: true,
                            mode: "connect",
                        },
                        resize: false,
                    },
                    modes: {
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#fff",
                    },
                    links: {
                        color: "#ff0000",
                        distance: 100,
                        enable: true,
                        opacity: 0.8,
                        width: 0.3,
                    },
                    move: {
                        direction: "none",
                        enable: true,
                        outModes: {
                            default: "bounce",
                        },
                        random: true,
                        speed: 3,
                        straight: true,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 250,
                        },
                        value: 50,
                    },
                    opacity: {
                        value: 0,
                    },
                    shape: {
                        type: "triangle",
                    },
                    size: {
                        value: {min: 5, max: 5},
                    },
                },
                detectRetina: true,
            }}
        />
    );
};