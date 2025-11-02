import { createSignal, useFrame, type Component } from 'solid-three'
import { Color, Mesh } from 'three'

const Box: Component = () => {
    let mesh: Mesh | undefined
    const [hovered, setHovered] = createSignal(false)
    const color = () => new Color() .setStyle( (hovered() ? 'blue' : 'green') )

    useFrame(() => (mesh!.rotation.y += 0.01))

    return (
        <mesh
            ref={mesh as any}
            onPointerEnter={(e) => setHovered(true)}
            onPointerLeave={(e) => setHovered(false)}>
            <boxGeometry />
            <meshLambertMaterial color={color()} />
        </mesh>
    )
}

export default Box
