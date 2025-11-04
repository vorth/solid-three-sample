import { createSignal, type Component } from 'solid-js'
import { Canvas, createT, useFrame } from 'solid-three'
import * as THREE from 'three'
import { Color, Mesh } from 'three'

// Create the T namespace
const T = createT( THREE )

const Box: Component = () => {
    let mesh
    const [hovered, setHovered] = createSignal(false)
    const color = () => new Color() .setStyle( (hovered() ? 'pink' : 'white') )

    useFrame(() => (mesh!.rotation.y += 0.001))

    return (
        <T.Mesh
            ref={mesh as any}
            onPointerEnter={(e) => setHovered(true)}
            onPointerLeave={(e) => setHovered(false)}>
            <T.BoxGeometry />
            <T.MeshLambertMaterial color={color()} />
        </T.Mesh>
    )
}

const App: Component = () => {
    return (
        <Canvas
            style={{ height: '400px', width: '600px' }}
            defaultCamera={{
                position: [0, 0, 3],
            }}
            gl={{ args: [{ alpha: true, antialias: true }] }}
            shadows>
            <Box />
            <T.AmbientLight />
            <T.SpotLight position={[0, 5, 10]} intensity={1} />
        </Canvas>
    )
}

export default App
